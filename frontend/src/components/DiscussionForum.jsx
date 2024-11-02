import React, { useState } from 'react'

const DiscussionForum = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: 'How can we reduce plastic waste?',
      category: 'Sustainability',
      upvotes: 10,
      replies: [
        { id: 1, text: 'Recycling and using alternatives like metal or glass.', upvotes: 5 },
        { id: 2, text: 'Educating people on proper disposal methods.', upvotes: 3 }
      ]
    },
    {
      id: 2,
      title: 'What are the effects of climate change on wildlife?',
      category: 'Climate Change',
      upvotes: 15,
      replies: [
        { id: 1, text: 'Rising temperatures affect habitats and migration patterns.', upvotes: 10 }
      ]
    }
  ]);

  const [newDiscussion, setNewDiscussion] = useState({ title: '', category: '' })

  const addNewDiscussion = () => {
    const newId = discussions.length + 1;
    setDiscussions([...discussions, { id: newId, title: newDiscussion.title, category: newDiscussion.category, upvotes: 0, replies: [] }])
    setNewDiscussion({ title: '', category: '' })
  }

  const handleUpvotes = (disId) => {
    setDiscussions(prev =>
      prev.map(discussions =>
        discussions.id === disId ? { ...discussions, upvotes: discussions.upvotes + 1 } : discussions
      ))
  }

  return (
    <div className='container w-full mx-auto flex flex-col justify-center items-center py-8 font-display'>
      <div className='text-3xl font-semibold'>Discussion Forum</div>
      <div className='bg-gray-100 px-48 py-4 my-1 rounded-lg shadow-md'>
        <div className='text-2xl font-semibold my-1 flex flex-col items-center justify-center mb-2'>Start a new discussion</div>
        <input type="text" className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-md' placeholder='Discussion Title' value={newDiscussion.title}
          onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })} />
        <select className='w-full px-4 py-2 mb-3 border border-gray-300 rounded-full' name="" id="" value={newDiscussion.category}
          onChange={(e) => setNewDiscussion({ ...newDiscussion, category: e.target.value })}>
          <option value="">Select Category</option>
          <option value="sustainability">Sustainability</option>
          <option value="climate">Climate Change</option>
          <option value="renewable">Renewable Energy</option>
        </select>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600'
          onClick={addNewDiscussion}>Post Discussion</button>
      </div>

      <div>
        {discussions.map((discussion) => (
          <div key={discussion.id} className='bg-white shadow-md px-48 py-2 my-4'>
            <div className='text-2xl font-semibold mb-1'>{discussions.title}</div>
            <p className='text-sm text-gray-500'>Category: {discussions.category}</p>
            <div className='my-2'>
              <button className='bg-gray-200 px-2 py-1 rounded-lg hover:bg-gray-300' onClick={handleUpvotes}>Upvote ({discussions.upvotes})</button>
            </div>
            <div className='my-2'>
              <div className='text-xl font-bold'>Replies: </div>
              {discussion.replies.length === 0 ? (
                <p className="text-sm text-gray-500">No replies yet.</p>
              ) : (
                <ul className="list-disc ml-6">
                  {discussion.replies.map((reply) => (
                    <li key={reply.id} className="mb-2">
                      {reply.text} <span className="text-gray-500">({reply.upvotes} upvotes)</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscussionForum
