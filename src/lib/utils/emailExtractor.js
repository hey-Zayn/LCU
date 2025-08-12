export function extractEmailsFromCSV(text) {
    return new Promise((resolve) => {
      const lines = text.split('\n');
      const header = lines[0].split(',');
      const emailIndex = header.findIndex(col => col.trim().toLowerCase() === 'email');
      
      if (emailIndex === -1) {
        throw new Error('CSV must contain an "email" column');
      }
  
      const emails = [];
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim()) {
          const values = lines[i].split(',');
          if (values[emailIndex]) {
            emails.push(values[emailIndex].trim().toLowerCase());
          }
        }
      }
      
      resolve(emails);
    });
  }