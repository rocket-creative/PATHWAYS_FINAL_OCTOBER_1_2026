import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" data-stop="labyrinth">
      <div className="wrap wrap--narrow">
        <div className="glass glass--strong grid gap-5 p-10 text-center">
          <p className="eyebrow">No wrong turns</p>
          <h1 className="!text-[2.6rem]">That page is not on the path</h1>
          <p className="lead">A labyrinth has no dead ends. Try one of these.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn--primary">
              Home
            </Link>
            <Link href="/services" className="btn btn--ghost">
              Services
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
