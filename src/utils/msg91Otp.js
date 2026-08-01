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

  const seen = new Set();
  const channels = [];

  widgetData.processes.forEach((process) => {
    const channel = process.channel;
    if (!channel || channel.value == "3" || seen.has(channel.value)) {
      return;
    }
    seen.add(channel.value);
    channels.push(channel);
  });

  return channels;
}
