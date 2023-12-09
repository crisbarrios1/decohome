let excel = document.getElementById("exportToExcel");
excel.addEventListener("click", exportToExcel);
console.log(excel)



        
        function exportToExcel() {
            var wb = XLSX.utils.book_new();
            var ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            XLSX.writeFile(wb, 'data.xlsx');
        }
        
        let pdf = document.getElementById("exportToPDF");
        pdf.addEventListener("click", exportToPDF);
        // Función para exportar a PDF
        
        function exportToPDF() {
            var pdf = new html2pdf();
            pdf.autoTable({ html: '#dataTable' });
            pdf.save('data.pdf');
        }
        
