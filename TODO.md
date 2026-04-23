# 待办事项

## 笔趣阁desktop

> [https://9c3d8b4f680f08008c37.bqg655.cc/#/]

## 生成视频模型选择

<https://www.seedance.ai/>

## 对接微信/支付宝支付

## 开发微信公众号用于网站登录

## 微信扫码&&公众号等授权登录

## 生成论文模型选择千问

---

### 核心成本与稳定性对比

| 维度 | Ollama 本地部署 (Qwen 2.5/3b/7b) | 云服务 API (通义千问官方) |
| :--- | :--- | :--- |
| **直接成本** | **零成本**（仅电费） | 按量付费（Token 计费） |
| **硬件门槛** | 需要高显存显卡 (建议 12G+ RTX 显卡) | 无限制，任何服务器都能跑 |
| **响应速度** | 取决于你的显卡，并发能力几乎为 **1** | 高并发支持，毫秒级响应 |
| **模型能力** | 本地通常跑的是**量化版**，逻辑能力有损 | 原生完整模型，逻辑最强，支持长文本 |

---

### 混合模式 (Hybrid)

既然你正在用 **NestJS** 开发后端，我建议你构建一个**驱动层 (Driver)**，同时支持两种模式：

#### 阶段 A：开发调试（本地 Ollama）

在编写前端 UI、调试 `Stepper` 步骤条逻辑、测试支付回调时，使用本地 Ollama。

* **优点**：省钱，不怕接口被封，断网也能改代码。
* **配置**：在 NestJS 中通过 `langchain` 或 `axios` 调用 `http://localhost:11434/api/generate`。

#### 阶段 B：公测与上线（云端 API）

当你的朋友通过 **ngrok** 访问你的系统时，切换到云端 API。

* **原因**：你本地的显卡无法承受多用户同时生成的压力。如果两个用户同时点击“生成”，你的本地显卡会直接崩溃或导致响应超时。
* **优势**：云端 API（如阿里云百炼）目前对新用户有大量免费额度，且 Qwen 系列的 Token 价格极低（甚至比买一度电还便宜）。

---

### DeepInk 的技术实现

你可以利用 NestJS 的 `ConfigService` 轻松实现切换：

```typescript
// service 伪代码
async generatePaperSection(prompt: string) {
  if (process.env.NODE_ENV === 'development') {
    // 调用本地 Ollama
    return this.ollama.chat(prompt);
  } else {
    // 调用阿里云通义千问官方 API
    return this.dashscope.chat(prompt);
  }
}
```
