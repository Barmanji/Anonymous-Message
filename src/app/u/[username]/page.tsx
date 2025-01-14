"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import * as z from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import Link from "next/link";
import { useParams } from "next/navigation";
import { messageSchema } from "@/schemas/messageSchema";
import messageSuggestions from "@/messageSuggestions.json"; // Importing the JSON file

// Default static messages
const defaultMessages = [
  "What's your favorite movie?",
  "Do you have any pets?",
  "What's your dream job?"
];

const specialChar = '||';

const parseStringMessages = (messageString: string): string[] => {
  return messageString.split(specialChar);
};

export default function SendMessage() {
  const params = useParams<{ username: string }>();
  const username = params.username;

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  const messageContent = form.watch("content");

  const handleMessageClick = (message: string) => {
    form.setValue("content", message);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [randomSuggestions, setRandomSuggestions] = useState<string[]>([]);
  const [showDefaultMessages, setShowDefaultMessages] = useState(true); // To toggle between default and random messages

  // Function to get 3 random suggestions from the JSON file
  const getRandomSuggestions = () => {
    const shuffled = messageSuggestions.messages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Get the first 3 shuffled messages
  };

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post<ApiResponse>("/api/send-message", {
        ...data,
        username,
      });

      toast({
        title: response.data.message,
        variant: "default",
      });
      form.reset({ ...form.getValues(), content: "" });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        description:
          axiosError.response?.data.message ?? "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowSuggestions = () => {
    setShowDefaultMessages(false); // Hide default messages when showing random ones
    setRandomSuggestions(getRandomSuggestions());
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-gray-900 rounded max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        Public Profile Link
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  Send Anonymous Message to @{username}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your anonymous message here"
                    className="resize-none border-black text-teal-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            {isLoading ? (
              <Button disabled className="bg-black text-white">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isLoading || !messageContent}
                className="bg-black text-white hover:bg-black hover:text-green-500"
              >
                Send It
              </Button>
            )}
          </div>
        </form>
      </Form>
      <div className="text-center text-white">
      </div>
      <div className="space-y-4 my-8">
        <div className="space-y-2 text-white">
          <Button
            onClick={handleShowSuggestions}
            className="bg-black text-white hover:bg-black hover:text-green-500"
          >
            {randomSuggestions.length > 0
              ? "Change Suggestions"
              : "Show Suggestions"}
          </Button>
        </div>
        {/* Show default messages initially */}
        {showDefaultMessages && (
          <Card className="border-black bg-black">
            <CardHeader className="text-blue-500 bg-black">
              <h3 className="text-xl font-semibold">Default Messages</h3>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4 bg-black">
              {defaultMessages.map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="mb-2 border-blue-500 text-blue-500"
                  onClick={() => handleMessageClick(message)}
                >
                  {message}
                </Button>
              ))}
            </CardContent>
          </Card>
        )}
        {/* Show random messages when the button is clicked */}
        {randomSuggestions.length > 0 && (
          <Card className="border-black bg-black">
            <CardHeader className="text-blue-500 bg-black">
              <h3 className="text-xl font-semibold">Messages</h3>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4 bg-black">
              {randomSuggestions.map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="mb-2 border-blue-500 text-blue-500"
                  onClick={() => handleMessageClick(message)}
                >
                  {message}
                </Button>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
      <Separator className="my-6 border-black" />
      <div className="text-center text-white">
        <div className="mb-4">Get Your Message Board</div>
        <Link href={"/sign-up"}>
          <Button className="bg-black text-white">Create Your Account</Button>
        </Link>
      </div>
    </div>
  );
}
