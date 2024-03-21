"use client";
//* Local imports
import { useAppSelector, useAppDispatch } from '../_hooks'
import { decrement, increment } from '../_slices/countSlice'

//* Component imports
import { Button } from '@/components/ui/button';

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col w-full justify-center items-center'>
        <span className='text-5xl font-bold'>{count}</span>
      </div>
      <div className='flex flex-row gap-2'>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}