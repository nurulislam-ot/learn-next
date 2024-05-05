export default function Home() {
  return (
    <main className='p-4'>
      <h1 className='font-lora text-5xl'>Hello World</h1>
      <button
        onClick={() => {
          alert('Hello Bangladesh. How are you!')
        }}
      >
        Hello
      </button>
    </main>
  )
}
