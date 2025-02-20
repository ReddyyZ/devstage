import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Mail, User } from "lucide-react";

export function SubscriptionForm() {
  function onSubscribe(data: FormData) {
    const values = Object.fromEntries(data.entries());
  }

  return (
    <form
      action=""
      className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]"
    >
      <h2 className="font-heading text-xl font-semibold text-gray-100">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField name="name" type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField name="email" type="email" placeholder="Email" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar <ArrowRight />
      </Button>
    </form>
  );
}
