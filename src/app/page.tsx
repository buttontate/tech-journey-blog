import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Vikings themed hero image
const imageUrl = 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div className="text-accent">
        <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-lg mb-8 p-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-4">SKOL!</h1>
              <p className="text-xl">Welcome to Vikings Nation</p>
              <div className="text-6xl my-4">🏈</div>
            </div>
          </div>
        </div>

        <section>
          <p className={'prose prose-invert max-w-none'}>
            Welcome to the ultimate Minnesota Vikings fan experience! Here we celebrate the purple and gold, 
            honor our legendary players, and keep the Viking spirit alive. From the frozen tundra of Minneapolis 
            to Vikings fans worldwide - <strong className="text-secondary">SKOL!</strong>
          </p>
          <div className={'my-4'}>
            <i>
              Join the conversation{' '}
                <Link href={'https://www.vikings.com'}>
                  <button className={'btn btn-sm btn-secondary'}>
                      <span className={'text-secondary-content font-bold'}>
                        Vikings.com
                      </span>
                  </button>
                </Link>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded-lg shadow-lg border-2 border-secondary'} 
                 src={imageUrl} 
                 alt={'Vikings Stadium'} 
                 width={800}
                 height={400}/>
        </div>

        <section className={'prose prose-invert max-w-none'}>
          <h2 className="text-secondary text-3xl font-bold mb-6 flex items-center">
            <span className="mr-3">⚡</span>
            Vikings Chronicles
            <span className="ml-3">⚡</span>
          </h2>
          <ul className="space-y-4">
            {allPostsData.map(({id, date, title}) => (
                <li key={id} className="bg-base-200 p-4 rounded-lg border-l-4 border-secondary hover:bg-base-300 transition-colors">
                  <div className="flex flex-col">
                    <Link href={`/posts/${id}`} className="text-accent hover:text-secondary text-lg font-semibold no-underline hover:underline">
                      {title}
                    </Link>
                    <br/>
                    <small className="text-neutral-content">
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
