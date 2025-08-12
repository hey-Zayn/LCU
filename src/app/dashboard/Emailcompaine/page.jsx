'use client';
import { useState } from 'react';
import {
  FiUpload,
  FiSend,
  FiCheckCircle,
  FiXCircle,
  FiFileText,
  FiMail,
  FiLock,
  FiEdit2,
} from 'react-icons/fi';
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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

export default function EmailCampaign() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
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
    setProgress(0);

    if (!file) {
      toast.error("Please upload a CSV file first.", {
        description: "File Required"
      });
      setIsLoading(false);
      return;
    }

    if (!emailCredentials.email || !emailCredentials.password) {
      toast.error("Please enter your email credentials.", {
        description: "Credentials Required"
      });
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

      // Simulate progress for demo
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + 10;
        });
      }, 500);

      const response = await fetch('/api/sendEmails', {
        method: 'POST',
        body: formData,
      });

      clearInterval(interval);
      setProgress(100);

      const data = await response.json();
      setResults(data.results || []);

      toast.success(
        `Successfully sent ${data.results?.filter(r => r.status === 'sent').length} emails.`,
        { description: "Campaign Sent" }
      );
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while sending emails.", {
        description: "Error"
      });
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

  const successCount = results.filter(r => r.status === 'sent').length;
  const failureCount = results.filter(r => r.status !== 'sent').length;

  return (
    <div className="w-full min-h-screen flex justify-center items-center py-8 px-4 sm:px-6">
      <Card className="w-full max-w-3xl mx-auto rounded-xl shadow-sm border">
        <CardHeader className="pb-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full p-3 mb-1 bg-primary/10 text-primary">
              <FiSend className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">
              Email Campaign
            </CardTitle>
            <CardDescription className="text-base">
              Send personalized emails to your audience with ease
            </CardDescription>
          </div>
        </CardHeader>
        
        <Separator className="mb-6" />
        
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-6">
            {/* Email Credentials Section */}
            <section className="space-y-4 rounded-lg p-6 bg-muted/50">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FiMail className="text-primary" /> Email Account
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                      <FiMail />
                    </div>
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
                
                <div className="space-y-2">
                  <Label htmlFor="password">App Password</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                      <FiLock />
                    </div>
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
                  <p className="text-xs text-muted-foreground mt-1">
                    For Gmail, use an App Password. Enable 2FA and generate one in your Google Account settings.
                  </p>
                </div>
                
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="senderName">Sender Name <span className="text-muted-foreground text-xs">(Optional)</span></Label>
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
            </section>

            {/* Email Content Section */}
            <section className="space-y-4 rounded-lg p-6 bg-muted/50">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FiEdit2 className="text-primary" /> Email Content
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
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
                
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="html">HTML Content</Label>
                  <Textarea
                    name="html"
                    id="html"
                    rows={6}
                    value={emailContent.html}
                    onChange={handleContentChange}
                    placeholder="<p>Hello {{email}}, ...</p>"
                    required
                    className="font-mono min-h-[120px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    Use HTML tags for formatting. <code className="bg-muted px-1.5 py-0.5 rounded">{`{{email}}`}</code> for personalization.
                  </p>
                </div>
              </div>
            </section>

            {/* File Upload Section */}
            <section className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 bg-muted/30 hover:bg-muted/50 transition-colors">
              <Label htmlFor="file-upload" className="cursor-pointer text-center w-full space-y-2">
                <FiUpload className="mx-auto h-10 w-10 text-muted-foreground" />
                <div>
                  {file ? (
                    <span className="text-base font-medium flex items-center justify-center gap-2">
                      <FiFileText className="text-primary" /> 
                      <span className="truncate max-w-xs">{file.name}</span>
                    </span>
                  ) : (
                    <>
                      <span className="text-base font-medium">
                        <span className="text-primary underline underline-offset-2">Click to upload</span> or drag and drop
                      </span>
                      <span className="block text-sm text-muted-foreground mt-1">CSV files only (email, name, etc.)</span>
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
            </section>

            {isLoading && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sending emails...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || !file || !emailCredentials.email || !emailCredentials.password}
              className={cn(
                "w-full h-12 text-base font-semibold gap-2",
                isLoading && "opacity-75 cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="h-5 w-5" />
                  Send Campaign
                </>
              )}
            </Button>
          </form>
        </CardContent>

        {results.length > 0 && (
          <>
            <Separator className="my-2" />
            <CardFooter className="flex flex-col gap-6 pt-0">
              <div className="w-full space-y-4">
                <h2 className="text-xl font-bold">Campaign Results</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Total Emails</div>
                    <div className="text-2xl font-bold">{results.length}</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Successful</div>
                    <div className="text-2xl font-bold text-success">{successCount}</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Failed</div>
                    <div className="text-2xl font-bold text-destructive">{failureCount}</div>
                  </div>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead className="w-[120px]">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {results.map((r, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{r.email}</TableCell>
                          <TableCell>
                            {r.status === 'sent' ? (
                              <Badge variant="success" className="gap-1">
                                <FiCheckCircle className="h-3 w-3" /> Sent
                              </Badge>
                            ) : (
                              <Badge variant="destructive" className="gap-1">
                                <FiXCircle className="h-3 w-3" /> Failed
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}