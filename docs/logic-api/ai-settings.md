# AI Assistant Settings

::: info Tujuan

**AI Assistant Settings** digunakan untuk mengkonfigurasi AI provider, model, dan API key yang digunakan dalam BL Editor.
Semua tetapan ini disimpan dalam database dan tidak memerlukan restart server.
:::

::: warning Nota 
Gunakan settings ini apabila anda ingin:

- Mengaktifkan atau mematikan AI Assistant
- Menukar AI provider (Anthropic / OpenRouter)
- Menetapkan API Key untuk AI
- Memilih model AI yang digunakan
- Mengawal akses AI dalam BL Editor
:::
---

::: info AI Assistant Settings
| Ruangan             | Penerangan                                     |
| ------------------- | ---------------------------------------------- |
| Enable AI Assistant | Aktifkan / nyahaktif AI Assistant dalam sistem |
| Provider            | Pilihan AI provider (Anthropic / OpenRouter)   |
| API Key             | Kunci API untuk sambungan AI                   |
| Model               | Model AI yang digunakan                        |
| Save Settings       | Simpan konfigurasi AI                          |

:::
--- 

### Enable AI Assistant
::: info AI Assistant
AI Assistant boleh dikawal melalui toggle ini:

- ON → AI Assistant aktif dalam BL Editor
- OFF → AI Assistant tidak dipaparkan kepada semua pengguna
:::
---

### AI Provider
::: tip Sistem menyokong beberapa provider AI:

1. Anthropic (Claude)
- Menggunakan model Claude
- Sesuai untuk:
 - Code generation
 - Logic explanation
 - Structured reasoning
2. OpenRouter (Multi-model Gateway)
- Menyokong banyak model dalam satu platform:
 - Claude
 - GPT-4o
 - Gemini
- Lebih fleksibel untuk multi-model AI
:::
---

::: info **Model Selection**
Setiap provider mempunyai model berbeza:

| Provider   | Contoh Model                   |
| ---------- | ------------------------------ |
| Anthropic  | claude-sonnet-4-6              |
| OpenRouter | openrouter/auto, openai/gpt-4o |

Model menentukan cara AI menjana jawapan.
:::
---

::: info **Save Settings**
- Klik **Save Settings** untuk simpan konfigurasi
- Perubahan akan terus digunakan tanpa restart siste
:::
---

::: danger Isu Biasa
#### AI Assistant tidak muncul
- Enable AI Assistant tidak diaktifkan
- User belum refresh page

##### API Error
- API Key salah atau expired
- Provider tidak dipilih
- Model tidak valid

#### AI tidak respon
- Internet / API gateway issue
- Model limit exceeded
- OpenRouter/Anthropic down.
:::