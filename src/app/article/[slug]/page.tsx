export default function ArticleSlug({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>
}
