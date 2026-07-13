# 部署说明

推荐先部署到 Vercel，不需要提前购买域名。Vercel 会先生成一个 `*.vercel.app` 地址，之后再绑定正式域名即可。

## Vercel

1. 把项目推到 GitHub。
2. 在 Vercel 导入仓库。
3. 保持默认 Astro 配置：
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 在 Vercel 的 Environment Variables 中启用 System Environment Variables。

如果后续绑定了正式域名，添加环境变量：

```txt
SITE_URL=https://your-domain.com
```

本地开发不需要设置 `SITE_URL`。
