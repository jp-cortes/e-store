import { Card } from "@/components/Card"

type Props = {}

export default function Category(props: Props)  {
  return (
    <div className='grid lg:grid-cols-4 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

