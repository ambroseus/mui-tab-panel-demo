import * as React from "react"

export function TabContent1() {
  React.useEffect(() => {
    console.log(`mount content component 1`)
  }, [])

  return <span>content 1</span>
}

export function TabContent2() {
  React.useEffect(() => {
    console.log(`mount content component 2`)
  }, [])

  return <span>content 2</span>
}
export function TabContent3() {
  React.useEffect(() => {
    console.log(`mount content component 3`)
  }, [])

  return <span>content 3</span>
}
