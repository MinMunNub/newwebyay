function handleSortToggle(checkbox) {
    const optionName = checkbox.parentNode.textContent.trim();
    const msg = checkbox.checked
      ? `✅ "${optionName}" đã được áp dụng`
      : `❌ "${optionName}" đã được gỡ bỏ`;
    showToast(msg);
  }
  
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
  
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }
  