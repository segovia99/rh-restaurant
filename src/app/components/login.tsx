'use client'

import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react"
import { Loader2 } from "lucide-react"

export function Login() {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDisabled(true)
    const data = new FormData(event.currentTarget);
    console.log(data);

    const responseNextAuth = await signIn('credentials', {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setIsDisabled(false);
      return toast.error(responseNextAuth.error);
    }

    const session = await getSession();

    if (session?.user) {
      toast.success('Bienvenido');
      router.push('/rhu');
    }

    // toast('This is a sonner toast');
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Acceder</h1>
            <p className="text-balance text-muted-foreground">
            Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">contraseña</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" disabled={isDisabled}>
             {
              isDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />
             }
             {
              isDisabled && "Espere por favor"
             }
              {
                !isDisabled && "Login"
              }
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
          ¿No tienes una cuenta?{" "}
            <Link href="#" className="underline">
              Registrate
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/logo_1.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </form>
  )
}
