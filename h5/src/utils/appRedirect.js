import config from '../config'

/**
 * Opens the app download URL
 */
export const openDownloadUrl = () => {
  console.log(112);
  // window.location.href = config.downloadUrl
  const deeplink = config.downloadUrl;
  const fallbackUrl = "/share?type=0"; // App 下载地址
  const timeout = 5000; // 5 秒

  // 记录当前时间
  const start = Date.now();

  // 使用 iframe 尝试打开 deeplink
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = deeplink;
  document.body.appendChild(iframe);

  // 设置兜底跳转（未唤醒 App 就跳转）
  setTimeout(() => {
    const now = Date.now();
    if (now - start < timeout + 500) {
      // 用户没有被系统跳转走，说明可能没有安装 App
      window.location.href = fallbackUrl;
    }
    document.body.removeChild(iframe); // 清理 iframe
  }, timeout);
}

/**
 * Higher-order function that returns a click handler to open the download URL
 * This is useful for attaching to @click events in Vue templates
 */
export const createDownloadClickHandler = () => {
  return () => openDownloadUrl()
}

/**
 * Directives for Vue to easily add the download URL click behavior to any element
 */
export const downloadUrlDirective = {
  mounted(el) {
    el.addEventListener('click', openDownloadUrl)
  },
  unmounted(el) {
    el.removeEventListener('click', openDownloadUrl)
  }
} 