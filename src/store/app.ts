import { defineStore } from 'pinia'
import { range, sortBy } from 'lodash'
// @ts-ignore-line: TS2307
import { Octokit } from 'https://esm.sh/@octokit/rest'
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import MDParser from '@/utils/md-parser'

type ListForRepoResponseDataType = GetResponseDataTypeFromEndpointMethod<
  typeof Octokit.issues.listForRepo
>

export type Chapters = { [number: number]: Chapter }

export interface Exercise {
  number: number
  state: 'open' | 'closed'
  title: string
  body: string
}

export interface Chapter {
  number: number
  state: 'open' | 'closed'
  title: string
  description: string
  exercises: Exercise[]
}

interface State {
  owner: string
  repository: string
  octokit: Octokit
  chapters: Chapters
}

const owner = import.meta.env.VITE_GITHUB_OWNER
const repository = import.meta.env.VITE_GITHUB_REPOSITORY
const auth = import.meta.env.VITE_PERSONAL_ACCESS_TOKEN

export const useAppStore = defineStore('app', {
  state: (): State => ({
    owner,
    repository,
    octokit: new Octokit({ auth }),
    chapters: {},
  }),
  getters: {
    getChapters: (state) => state.chapters,
  },
  actions: {
    getChapter(number: number): Chapter {
      return { ...this.chapters[number] }
    },
    async setChapters(): Promise<void> {
      await Promise.all(range(1, 11).map(async (n) => await this.setChapter(n)))
    },
    async setChapter(number: number): Promise<void> {
      const mdParser = new MDParser()
      const { state, title, description } = (
        await this.octokit.rest.issues.getMilestone({
          owner: this.owner,
          repo: this.repository,
          milestone_number: number,
        })
      ).data
      const exercises: Exercise[] = sortBy(
        await Promise.all(
          (
            await this.octokit.rest.issues.listForRepo({
              owner: this.owner,
              repo: this.repository,
              milestone: number,
              state: 'all',
            })
          ).data.map(async (issue: ListForRepoResponseDataType) => ({
            number: issue.number % 100,
            state: issue.state,
            title: issue.title,
            body: await mdParser.parse(issue.body),
          })),
        ),
        'number',
      )
      this.chapters[number] = {
        number,
        state,
        title,
        description: await mdParser.parse(description),
        exercises,
      }
    },
  },
})
