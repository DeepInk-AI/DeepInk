export async function getQualityControl(
    message: any,
    onSuccess: any,
    onUpdate: any,
    onError: any,
    abortRef: any,
    setLoading: any,
    setOpen?: any,
) {
    const urls = 'http://localhost:3000/ollama/generate';
    let content: string = '';
    try {
        const response = await fetch(urls, {
            method: 'POST',
            headers: {
                Accept: 'text/event-stream', // 确保服务器响应是 SSE
                'Content-Type': 'application/json', // 发送 JSON 请求
            },
            body: JSON.stringify({ prompt: message }),
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ 请求失败:', response.status, errorText);
            throw new Error(`请求失败: ${response.status} - ${errorText}`);
        }
        const reader = response.body?.getReader();
        abortRef.current = () => {
            reader?.cancel();
        };
        const decoder = new TextDecoder();
        let buffer = '';
        let done = false;
        while (!done) {
            const { value, done: doneReading } = await reader!.read();
            done = doneReading;
            if (done) break;
            if (!value || !(value instanceof Uint8Array)) {
                console.warn('⚠️ 读取的流数据格式不正确', value);
                continue;
            }
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            for (const line of lines) {
                if (!line.trim()) continue;
                try {
                    if (setOpen) setOpen(true);
                    setLoading(false);
                    const jsonString = line.startsWith('data:') ? line.slice(5) : line;
                    const data = JSON.parse(jsonString);
                    if (data.response) {
                        content += data.response;
                    }
                    onUpdate(content);
                    if (data.done) {
                        done = true;
                    }
                } catch (err) {
                    console.error('❌解析JSON失败', err, line);
                }
            }
        }
        onSuccess(content);
    } catch (error: any) {
        console.error('❌ 发送请求时发生错误:', error);
        onError(error);
    }
}