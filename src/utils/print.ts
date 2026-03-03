/* eslint-disable @typescript-eslint/no-explicit-any */
const handlePrint = (url: any) => {
  const printWindow = window.open(url, "_blank");

  if (printWindow) {
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  }
};

export default handlePrint; 