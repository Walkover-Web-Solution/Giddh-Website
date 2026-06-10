let otpWidgetLoading = false;

export function initOtpWidget(onReady) {
  if (window.sendOtp) {
    onReady?.();
    return;
  }

  if (!otpWidgetLoading) {
    otpWidgetLoading = true;
    addOtpWidgetScript(true, false, () => setTimeout(onReady, 2000));
    return;
  }

  const interval = setInterval(() => {
    if (window.sendOtp) {
      clearInterval(interval);
      onReady?.();
    }
  }, 100);
}

export function getResendChannels() {
  const widgetData = window.getWidgetData?.();
  if (!widgetData?.processes) {
    return [];
  }

  return widgetData.processes
    .filter((process) => process.channel.value != "3")
    .map((process) => process.channel);
}
