import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <span className="sr-only">John Doe's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  John Doe
                </h1>
                <h2 className="text-2xl font-bold text-muted-foreground">
                  Game Developer
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I'm a passionate game developer with a strong background in
                  Unity and C#. I love creating immersive and engaging gaming
                  experiences.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="John Doe"
                  className="rounded-full w-40 h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've worked on a variety of game projects, from mobile casual
                  games to complex 3D adventures.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3"></div>
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                My Skills
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have a diverse set of skills that allow me to create engaging
                and polished game experiences.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">Unity</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">C#</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">Blender</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">Photoshop</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">Illustrator</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">Figma</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">GitLab</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium">AWS</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm always excited to discuss new game development
                opportunities. Feel free to reach out!
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex flex-col gap-4"></form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 John Doe. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  );
}
