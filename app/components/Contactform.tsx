'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactForm() {
  const [file, setFile] = useState<File | null>(null)
  const [inquiryType, setInquiryType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    let fileData = null;
  if (file) {
    fileData = await toBase64(file);
  }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          inquiryType,
          file: fileData ? {
            content: fileData,
            filename: file?.name
          } : null
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        // Reset form
        event.currentTarget.reset()
        setFile(null)
        setInquiryType("")
        alert('Message sent successfully!')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-muted-foreground">Get in touch with our auto tuning experts</p>
      
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input name="name" id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input  name='email' id="email" type="email" placeholder="Your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input  name='phone' id="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  required 
                  className="min-h-[150px] resize-y" name='message'
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type</Label>
                <Select onValueChange={setInquiryType} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="file">File Upload (Optional)</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                {file && <p className="text-sm text-muted-foreground">Selected file: {file.name}</p>}
              </div>
            </div>
            
            <Button type="submit" className="w-full md:col-span-2" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}