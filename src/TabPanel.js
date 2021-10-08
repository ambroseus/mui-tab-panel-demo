import { useTabContext } from "@material-ui/lab/TabContext"

export function TabPanel(props) {
  const {
    children,
    className,
    style,
    value: id,
    containerProps,
    ...other
  } = props

  const context = useTabContext()

  if (context === null) {
    throw new TypeError("No TabContext provided")
  }
  const tabId = context.value

  return (
    <div
      className={className}
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        ...style,
        position: "absolute",
        left: 0,
        visibility: id === tabId ? "visible" : "hidden",
      }}
      {...other}
    >
      {children}
    </div>
  )
}
