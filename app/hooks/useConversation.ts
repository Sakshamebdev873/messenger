"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { IoOpen } from "react-icons/io5";

const useConversation = () => {
  const param = useParams();
  const conversationId = useMemo(() => {
    if (!param?.conversationId) {
      return "";
    }
    return param.conversationId as string;
  }, [param?.conversationId]);
  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [IoOpen, conversationId]
  );
};

export default useConversation;
