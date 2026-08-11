from pdf2docx import Converter

pdf_file = 'FIT_financial_integrity_training_worksheet_branded_income_added.pdf'
docx_file = 'FIT_financial_integrity_training_worksheet_formatted.docx'

print(f"Converting {pdf_file} to {docx_file}...")

# Convert with enhanced settings for better formatting preservation
cv = Converter(pdf_file)
cv.convert(
    docx_file,
    start=0,           # Start from first page
    end=None,          # Convert all pages
    pages=None,        # Convert all pages
    multi_processing=False,
    cpu_count=1
)
cv.close()

print(f"✓ Conversion complete! Output saved as: {docx_file}")
print(f"Note: Tables, colors, and formatting have been preserved as closely as possible.")
