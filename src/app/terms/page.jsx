import React from "react";

export default function page() {
  

  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-white text-black rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions for Job Application</h1>
      <p className="mb-4">
        Please read these terms and conditions carefully before applying for a job with us. By submitting your application, you agree to be bound by the following terms:
      </p>
      <ol className="list-decimal list-inside space-y-3 mb-4">
        <li>
          <strong>Accuracy of Information:</strong> You certify that all information provided in your application and any accompanying documents is true, complete, and accurate to the best of your knowledge. Providing false or misleading information may result in disqualification or termination of employment.
        </li>
        <li>
          <strong>Confidentiality:</strong> All information shared with you during the application process, including interview questions and company details, must be kept confidential and not disclosed to third parties.
        </li>
        <li>
          <strong>Data Privacy:</strong> By applying, you consent to the collection, processing, and storage of your personal data for recruitment purposes in accordance with our privacy policy.
        </li>
        <li>
          <strong>No Guarantee of Employment:</strong> Submission of an application does not guarantee employment. We reserve the right to accept or reject any application at our sole discretion.
        </li>
        <li>
          <strong>Intellectual Property:</strong> Any materials, ideas, or work products shared or created during the application process become the property of the company unless otherwise agreed in writing.
        </li>
        <li>
          <strong>Background Checks:</strong> You may be required to undergo background and reference checks as part of the recruitment process.
        </li>
        <li>
          <strong>Withdrawal:</strong> You may withdraw your application at any time by notifying us in writing.
        </li>
        <li>
          <strong>Changes to Terms:</strong> We reserve the right to update these terms and conditions at any time without prior notice.
        </li>
      </ol>
      <p className="mb-8">
        By proceeding with your application, you acknowledge that you have read, understood, and agree to these terms and conditions.
      </p>
     
    </div>
  );
}
