"use client";

import { useState } from "react";
import { TextInput, Textarea, Button, Stack, Text, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { RouteButton } from "../components/ui/button";

const schema = z.object({
  title: z.string().min(1, "タイトルを入力してください"),
  body: z.string().min(1, "本文を入力してください"),
});

type ContactForm = z.infer<typeof schema>;

export default function ContactPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const form = useForm<ContactForm>({
    initialValues: { title: "", body: "" },
    validate: (values) => {
      const result = schema.safeParse(values);
      if (result.success) return {};
      const errors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string") errors[field] = issue.message;
      }
      return errors;
    },
  });

  const handleSubmit = async (values: ContactForm) => {
    setMessage(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "送信に失敗しました");

      setMessage("送信が完了しました。ありがとうございます！");
      form.reset();
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <Box className="relative mx-auto w-full max-w-md px-4 sm:px-6 pt-6 pb-28">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="タイトル"
            placeholder="例：〇〇について"
            {...form.getInputProps("title")}
            size="md"
            radius="sm"
          />
          <Textarea
            label="本文"
            placeholder="お問い合わせ内容を入力してください"
            minRows={5}
            autosize
            {...form.getInputProps("body")}
            size="md"
            radius="sm"
          />
          {message && (
            <Text
              c={message.includes("完了") ? "green" : "red"}
              size="sm"
              className="flex justify-center mt-2"
            >
              {message}
            </Text>
          )}
        </Stack>
      </form>

      {/* ✅ 固定ボタン（Footerと重ならない） */}
      <Box
        className="
          fixed bottom-0 left-0 w-full
          bg-white border-t border-gray-200
          px-4 py-4 sm:px-6
          pb-[calc(1rem+env(safe-area-inset-bottom))]
          shadow-md
          z-50
        "
      >
        <Box className="max-w-md mx-auto flex flex-col items-center space-y-2">
          <Button
            type="submit"
            form="contact-form"
            loading={sending}
            size="md"
            radius="sm"
            className="w-full"
            onClick={() => form.onSubmit(handleSubmit)()}
          >
            送信
          </Button>
          <RouteButton />
        </Box>
      </Box>
    </Box>
  );
}
