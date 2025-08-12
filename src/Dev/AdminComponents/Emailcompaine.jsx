'use client';
import { useState } from 'react';
import { FiUpload, FiSend, FiCheckCircle, FiXCircle, FiFileText, FiMail, FiLock, FiEdit2 } from 'react-icons/fi';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Emailcompaine() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [emailCredentials, setEmailCredentials] = useState({
    email: '',
    password: '',
    senderName: ''
  });
  const [emailContent, setEmailContent] = useState({
    subject: 'Hello from Email Campaign!',
    html: '<p>This is a test message sent to <b>{{email}}</b>.</p>'
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!file) {
      alert('Please upload a file first.');
      setIsLoading(false);
      return;
    }

    if (!emailCredentials.email || !emailCredentials.password) {
      alert('Please enter your email credentials');
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('email', emailCredentials.email);
      formData.append('password', emailCredentials.password);
      formData.append('senderName', emailCredentials.senderName);
      formData.append('subject', emailContent.subject);
      formData.append('html', emailContent.html);

      const response = await fetch('/api/sendEmails', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      console.error(err);
      alert('An error occurred while sending emails.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (e) => {
    const { name, value } = e.target;
    setEmailContent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full flex justify-center items-start py-4 px-2 sm:px-4">
      <Card className="w-full max-w-lg mx-auto rounded-lg shadow-md border bg-background">
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-2xl font-bold">Email Campaign Sender</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Upload your CSV file to send personalized emails
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 pb-2">
          <form onSubmit={handleUpload} className="space-y-4">
            {/* Email Credentials Section */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <FiMail className="text-muted-foreground" /> Email Account Details
              </h3>
              <div>
                <Label htmlFor="email" className="mb-1">Email Address</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <FiMail />
                  </span>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={emailCredentials.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="your.email@gmail.com"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="password" className="mb-1">App Password</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <FiLock />
                  </span>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={emailCredentials.password}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Your Gmail app password"
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  For Gmail, use an App Password. Enable 2FA and generate one in your Google Account settings.
                </p>
              </div>
              <div>
                <Label htmlFor="senderName" className="mb-1">Sender Name (Optional)</Label>
                <Input
                  type="text"
                  name="senderName"
                  id="senderName"
                  value={emailCredentials.senderName}
                  onChange={handleInputChange}
                  placeholder="e.g. Your Company Name"
                />
              </div>
            </div>
            <Separator />
            {/* Email Content Section */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <FiEdit2 className="text-muted-foreground" /> Email Content
              </h3>
              <div>
                <Label htmlFor="subject" className="mb-1">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  value={emailContent.subject}
                  onChange={handleContentChange}
                  placeholder="Email subject"
                  required
                />
              </div>
              <div>
                <Label htmlFor="html" className="mb-1">HTML Content</Label>
                <Textarea
                  name="html"
                  id="html"
                  rows={4}
                  value={emailContent.html}
                  onChange={handleContentChange}
                  placeholder="<p>Hello {{email}}, ...</p>"
                  required
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  You can use HTML tags for formatting.
                </p>
              </div>
            </div>
            <Separator />
            {/* File Upload Section */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted rounded-md p-4 bg-muted/30 hover:bg-muted/40 transition-colors">
              <Label htmlFor="file-upload" className="cursor-pointer text-center w-full">
                <FiUpload className="mx-auto h-8 w-8 text-primary" />
                <div className="mt-2">
                  {file ? (
                    <span className="text-sm font-medium flex items-center justify-center text-foreground">
                      <FiFileText className="mr-2" /> {file.name}
                    </span>
                  ) : (
                    <>
                      <span className="text-sm font-medium text-foreground">
                        <span className="text-primary">Click to upload</span> or drag and drop
                      </span>
                      <span className="block text-xs text-muted-foreground mt-1">CSV files only</span>
                    </>
                  )}
                </div>
                <Input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept=".csv"
                  className="sr-only"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </Label>
            </div>
            <Button
              type="submit"
              disabled={isLoading || !file || !emailCredentials.email || !emailCredentials.password}
              className={cn(
                "w-full flex items-center justify-center gap-2 text-base font-medium",
                isLoading || !file || !emailCredentials.email || !emailCredentials.password
                  ? "bg-primary/60 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90"
              )}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="mr-1" />
                  Send Emails
                </>
              )}
            </Button>
          </form>
        </CardContent>
        {Array.isArray(results) && results.length > 0 && (
          <>
            <Separator className="my-2" />
            <CardContent className="pt-0">
              <h2 className="text-base font-semibold mb-2">Email Sending Results</h2>
              <div className="overflow-x-auto rounded-md border">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="py-2 px-3 text-left font-medium text-muted-foreground">Email</th>
                      <th className="py-2 px-3 text-left font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r, i) => (
                      <tr key={i} className="border-t">
                        <td className="py-2 px-3">{r.email}</td>
                        <td className="py-2 px-3">
                          {r.status === 'sent' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <FiCheckCircle className="mr-1" /> Sent
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <FiXCircle className="mr-1" /> Failed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-muted-foreground gap-2">
                <div>
                  Total: {results.length}
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                  Sent: {results.filter(r => r.status === 'sent').length}
                  <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 ml-2"></span>
                  Failed: {results.filter(r => r.status !== 'sent').length}
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}