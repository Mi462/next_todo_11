"use client";

import {
  Heading,
  Box,
  Button,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Flex,
  Textarea,
  SelectField,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import db from "../firebase";
import { useRouter } from "next/navigation";

const initialTodo = {
  title: "",
  detail: "",
  priority: "High",
};

const priorities = ["High", "Middle", "Low"];

export default function Create() {
  const router = useRouter()
  const [newTodo, setNewTodo] = useState(initialTodo);

  const hendleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
    console.log(new Date());
  };

  const handleSubmit = async () => {
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, {
      ...newTodo,
      Create: serverTimestamp(),
      Update: serverTimestamp(),
    });
    setNewTodo(initialTodo);
    router.push("/top")
  };

  return (
    <>
      {/* 中身 */}
      <Box border={5} p={20} pt={5}>
        {/* Backボタン */}
        <Flex justify="end">
          <Button
            px={8}
            background={"green.300"}
            border="1px"
            borderColor="green.600"
            rounded="full"
          >
            Back
          </Button>
        </Flex>
        {/* Backボタン */}

        {/* TODOのタイトル設定 */}
        <FormControl onSubmit={handleSubmit}>
          <Heading as="h4" size="md">
            TITLE
          </Heading>
          <Input
            name="title"
            rounded={8}
            h={16}
            size="md"
            placeholder="Text"
            _placeholder={{ color: "gray", fontWeight: "bold" }}
            value={newTodo.title}
            onChange={hendleInputChange}
          />
          {/* TODOのタイトル設定 */}

          {/* 詳細部分 */}
          <Heading as="h4" size="md" mt="15px">
            DETAIL
          </Heading>
          <Textarea
            name="detail"
            rounded={8}
            rows={10}
            resize="none"
            size="md"
            placeholder="Text"
            _placeholder={{ color: "gray", fontWeight: "bold" }}
            value={newTodo.detail}
            onChange={hendleInputChange}
          />
          {/* 詳細部分 */}

          {/* 優先順位の選択肢 */}
          <Box fontSize="20px" fontWeight="bold">
            <RadioGroup name="priority" value={newTodo.priority}>
              <Heading as="h4" size="md" mt="15px">
                PRIORITY
              </Heading>
              <Stack direction="row">
                {priorities.map((priority) => (
                  <Radio
                    key={priority}
                    value={priority}
                    checked={priority === SelectField}
                    onChange={hendleInputChange}
                  >
                    <Box fontSize="20px" pr={3}>
                      {priority}
                    </Box>
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
          {/* 優先順位の選択肢 */}

          {/* CREATEボタン */}
          <Flex justify="end">
            <Button
              onClick={handleSubmit}
              px={5}
              background={"green.500"}
              border="1px"
              borderColor="green.900"
              rounded="full"
              fontSize={18}
              color="white"
            >
              CREATE
            </Button>
          </Flex>
          {/* CREATEボタン */}
        </FormControl>
      </Box>
      {/* 中身 */}
    </>
  );
}
