import { t } from "i18next";
import toast from "react-hot-toast";

export const copyUrlToClipboard = () => {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  navigator.clipboard.writeText(currentUrl)
    .then(() => {
      console.log('URL copied to clipboard');
      toast.success(t("copy"))
    })
    .catch(err => {
      console.error('Failed to copy URL: ', err);
      toast.error(t("copyFail"))
    });
};