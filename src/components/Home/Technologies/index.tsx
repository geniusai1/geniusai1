import React from 'react'

const Technologies = () => {
  return (
    <div
      className="min-h-[600px] bg-[url('/bg-tech.svg')] bg-no-repeat flex pt-4 flex-col justify-center items-center bg-cover
    "
    >
      <div className="max-w-[1000px] w-[90%] md:flex justify-center items-center mx-auto my-auto gap-[140px]">
        <h1 className="text-[24px] md:text-[40px] font-exo2 md:w-[50%] font-[600]">Technologies that we work With</h1>
        <ul className="md:w-[50%] list-disc text-[14px] w-max mx-auto md:mx-0 md:text-[24px]">
          <li>Search Relevance</li>
          <li>Time Series</li>
          <li>OpenAI and ChatGPT</li>
          <li>LLMs</li>
          <li>Deep Learning</li>
          <li>NLP</li>
          <li>Semantic search</li>
          <li>Enterprise knowledge graph</li>
        </ul>
      </div>
    </div>
  )
}

export default Technologies
