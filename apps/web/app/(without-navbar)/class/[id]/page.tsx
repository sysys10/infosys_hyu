// import { supabase } from "@/app/(supabase)/clinet";

export const revalidate = 0

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  console.log(id)
  // const { data: classData } = (await supabase
  //   .from("classes")
  //   .select("*, subjects(id, title)")
  //   .eq("id", id)
  //   .single()) as { data: classItemType };
  // const content = fetch(classData.url).then((res) => res.text());

  return (
    <div>
      {/* <Link href={`/classes?subject=${classData.subjects.title}`}>
        <div className="hover:ring-2 ring-buttonyellow absolute top-10 left-10 w-14 h-14 flex justify-center items-center rounded-xl bg-buttonyellow z-10">
          <Image src="/images/back.png" width="36" height="43" alt="back" />
        </div>
      </Link>
      {
        <div
          className="z-0"
          dangerouslySetInnerHTML={{ __html: classData.url }}
        />
      } */}
      no - navbar
    </div>
  )
}
