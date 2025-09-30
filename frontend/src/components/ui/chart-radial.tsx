import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import { ChartContainer } from "../ui/chart"
import type { ChartConfig } from "../ui/chart"
import { useFileStore } from "../../store/file-store"
import { useEffect } from "react"
import { formatFileSize } from "../../lib/utils"

export const description = "A radial chart with text"




export function ChartRadialText() {

  const {fetchTotalStorage, totalStorage} = useFileStore()

useEffect(() => {
  fetchTotalStorage()
}, [fetchTotalStorage])

console.log(formatFileSize(totalStorage))

const MAX_STORAGE = 60 * 1024 * 1024 * 1024
const percentUsed = Math.min((totalStorage/ MAX_STORAGE) * 100, 100)


const chartData = [
  { browser: "chrome", storage: percentUsed, value: percentUsed, fill: "#FFFFFF" },
]

const chartConfig = {
  storage: {
    label: "Storage",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

  return (
    <ChartContainer
      config={chartConfig}
      className="w-[200px] h-[200px] mx-auto" // 👈 fixed size for chart
    >
      <ResponsiveContainer>
        <RadialBarChart
          data={chartData}
          startAngle={90}
          endAngle={-270}
          innerRadius={80}
          outerRadius={110}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-[#FB8E91] last:fill-[#FF7474]"
            polarRadius={[86, 74]}
          />
          <RadialBar
            dataKey="value"
            fill="#FB8E91" // bar color
            background={{ fill: "#FFFFFF" }} // ring color
            cornerRadius={10}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-white text-4xl font-bold"
                      >
                        {chartData[0].storage.toLocaleString()}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-white font-bold"
                      >
                        Space Used
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
