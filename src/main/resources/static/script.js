function generateInvoice() {
    const invoice = getFormData();
    fetch('/api/invoice/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
    })
    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not ok.');
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'invoice.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

function previewInvoice() {
    const invoice = getFormData();
    fetch('/api/invoice/preview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
    })
    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not ok.');
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

function getFormData() {
    return {
        invoiceNumber: document.getElementById('invoiceNumber').value,
        billFrom: document.getElementById('billFrom').value,
        billTo: document.getElementById('billTo').value,
        contactNumber: document.getElementById('contactNumber').value,
        gstNumber: document.getElementById('gstNumber').value,
        customerName: document.getElementById('customerName').value,
        invoiceDate: document.getElementById('invoiceDate').value,
        items: [
            {
                description: document.getElementById('description').value,
                quantity: parseInt(document.getElementById('quantity').value),
                unitPrice: parseFloat(document.getElementById('unitPrice').value),
                total: parseInt(document.getElementById('quantity').value) * parseFloat(document.getElementById('unitPrice').value)
            }
        ]
    };
}
