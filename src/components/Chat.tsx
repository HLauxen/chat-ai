'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from 'ai/react'
import { ScrollArea } from "@radix-ui/react-scroll-area";



export interface ChatProps { }

export function Chat(props: ChatProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });
    return (
        <div className="flex min-h-screen bg-slate-50 items-center justify-center">
            <Card className="w-[440px]  ">
                <CardHeader>
                    <CardTitle>Chat AI</CardTitle>
                    <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
                        { messages.map(message => {
                            return (
                                <div key={message.id}  className="flex gap-3 text-slate-600 text-sm mb-4">
                                    {message.role === 'user' && (
                                        <Avatar>
                                            <AvatarFallback>HL</AvatarFallback>
                                            <AvatarImage src="https://github.com/HLauxen.png" />
                                        </Avatar>
                                    )}
                                    {message.role === 'assistant' && (
                                        <Avatar>
                                            <AvatarFallback>HL</AvatarFallback>
                                            <AvatarImage src="https://github.com/openai.png" />
                                        </Avatar>
                                    )}
                                    <p className="leading-relaxed ">
                                    <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Usuário':'IA'}:</span>
                                    {message.content}
                                    </p>
                                </div>
                            )
                        }) }
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form className="space-x-2 w-full flex gap-2" onSubmit={handleSubmit}>
                        <Input placeholder="How can I help you?"  value={input} onChange={handleInputChange}/>
                        <Button type="submit">Send</Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}