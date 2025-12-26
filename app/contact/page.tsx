"use client";

import { useState } from "react";
import {
  TextInput,
  Textarea,
  Button,
  Stack,
  Text,
  Box,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { RouteButton } from "../components/ui/button";

const schema = z.object({
  title: z.string().min(1, "タイトルを入力してください"),
  body: z.string().min(1, "本文を入力してください"),
});

type ContactForm = z.infer<typeof schema>;

export default function ContactPage() {
  const [message, setMessage] = useState("");
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
    setMessage("");
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
    <Box mih={460} maw={420} mx="auto" my="xl" px="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="タイトル"
            placeholder="例：〇〇について"
            {...form.getInputProps("title")}
          />

          <Textarea
            label="本文"
            placeholder="お問い合わせ内容を入力してください"
            minRows={5}
            autosize
            {...form.getInputProps("body")}
          />

          <Button type="submit" loading={sending} fullWidth>
            送信
          </Button>

          {message && (
            <Center>
              <Text c={message.includes("完了") ? "green" : "red"} size="sm">
                {message}
              </Text>
            </Center>
          )}
        </Stack>
      </form>

      <Center mt="md">
        <RouteButton />
      </Center>
    </Box>
  );
}
