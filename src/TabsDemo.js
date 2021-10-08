import * as React from "react"
import { Tab } from "@material-ui/core"
import { TabContext, TabList } from "@material-ui/lab"
import { TabPanel } from "./TabPanel"
import { TabContent1, TabContent2, TabContent3 } from "./TabContent"

export function TabsDemo() {
  const [tabId, setTabId] = React.useState("tab1")
  const handleChange = (event, id) => setTabId(id)

  return (
    <TabContext value={tabId}>
      <TabList value={tabId} variant="standard" onChange={handleChange}>
        <Tab value="tab1" label="Tab 1" />
        <Tab value="tab2" label="Tab 2" />
        <Tab value="tab3" label="Tab 3" />
      </TabList>
      <TabPanel value="tab1">
        <TabContent1 />
      </TabPanel>
      <TabPanel value="tab2">
        <TabContent2 />
      </TabPanel>
      <TabPanel value="tab3">
        <TabContent3 />
      </TabPanel>
    </TabContext>
  )
}
