import { client, db } from '@/db'
import { goals } from './schema'
import { fakerPT_BR as faker } from '@faker-js/faker'
import { goalCompletions } from './schema/goal-completions'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  // const [goal1, goal2] = await db
  //   .insert(goals)
  //   .values([
  //     // {
  //     //   title: 'Praticar exercícios',
  //     //   desiredWeeklyFrequency: 6,
  //     // },
  //     // {
  //     //   title: 'Estudar',
  //     //   desiredWeeklyFrequency: 6,
  //     // },
  //     // {
  //     //   title: 'Nadar',
  //     //   desiredWeeklyFrequency: 1,
  //     // },
  //   ])
  //   .returning()

  // const startOfWeek = dayjs().startOf('week')

  // await db.insert(goalCompletions).values([
  //   { goalId: goal1.id, createdAt: startOfWeek.toDate() },
  //   { goalId: goal2.id, createdAt: startOfWeek.add(1, 'day').toDate() },
  // ])
}

seed().then(() => {
  console.log('🌱 Database seeded successfully!')
  client.end()
})
