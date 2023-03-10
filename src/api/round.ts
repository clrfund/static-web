import type { BigNumber } from 'ethers'
import type { DateTime } from 'luxon'
import type { Project } from './projects'

export interface RoundInfo {
  fundingRoundAddress: string
  userRegistryAddress: string
  recipientRegistryAddress: string
  recipientDepositAmount: BigNumber | null
  maciAddress: string
  recipientTreeDepth: number
  maxContributors: number
  maxRecipients: number
  maxMessages: number
  coordinatorPubKey: any
  nativeTokenAddress: string
  nativeTokenSymbol: string
  nativeTokenDecimals: number
  voiceCreditFactor: BigNumber
  status: string
  startTime: DateTime
  signUpDeadline: DateTime
  votingDeadline: DateTime
  totalFunds: BigNumber
  matchingPool: BigNumber
  contributions: BigNumber
  contributors: number
  messages: number
  projects?: Project[]
}

export interface LeaderboardRoundInfo {
  nativeTokenAddress: string
  nativeTokenSymbol: string
  nativeTokenDecimals: number
  voiceCreditFactor: BigNumber
}

export enum RoundStatus {
  Contributing = 'Contributing',
  Reallocating = 'Reallocating',
  Tallying = 'Tallying',
  Finalized = 'Finalized',
  Cancelled = 'Cancelled',
}
