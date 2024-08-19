import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

export function AccordionFilter({ data, itemSize, title, content }) {
  return (
    <Accordion open={true} type="single" collapsible className="w-full ">
      <AccordionItem value="1" border-b-none>
        <AccordionTrigger>{title || 'Item Title'}</AccordionTrigger>
        <div flex justify-between items-center>
          <div w-full>
            <p ext-black text-lg mb="16px" font-medium>Самое необходимое</p>
            {data.map((item, index) => {
              if (item.category === 1) {
                return (
                  <AccordionContent key={index}>
                    <div>
                      <div flex items-center space-x-2>
                        <Checkbox id={item?.title} />
                        <label
                          htmlFor={item?.title}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item?.title}
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                )
              }
            })}
          </div>
          <div w-full>
            <p ext-black text-lg mb="16px" font-medium>Характеристики</p>
            {data.map((item, index) => {
              if (item.category === 2) {
                return (
                  <AccordionContent key={index}>
                    <div>
                      <div flex items-center space-x-2>
                        <Checkbox id={item?.title} />
                        <label
                          htmlFor={item?.title}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item?.title}
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                )
              }
            })}
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionFilter
