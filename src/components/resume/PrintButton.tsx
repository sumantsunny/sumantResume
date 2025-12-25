import { Printer, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="no-print fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      <Button
        onClick={handlePrint}
        className="shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90"
        size="lg"
      >
        <Printer className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Print Resume</span>
        <span className="sm:hidden">Print</span>
      </Button>
    </div>
  );
};

export default PrintButton;
