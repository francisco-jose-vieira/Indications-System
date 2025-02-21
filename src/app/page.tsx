import { ArrowRight, Copy, Mail } from "lucide-react";
import { Button } from "../components/button";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <h1 className="text-4xl font-heading"></h1>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
          <Mail className="size-5"/>
          </InputIcon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
