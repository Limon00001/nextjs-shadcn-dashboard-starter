/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 May, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client component
'use client';

// External imports
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

// Internal imports
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';

// TodoList Data
const items = [
  { label: 'Introduction to JavaScript', id: 'id1', checked: true },
  { label: 'Advanced JavaScript Concepts', id: 'id2', checked: true },
  { label: 'Learning React Basics', id: 'id3', checked: true },
  { label: 'State Management in React', id: 'id4', checked: false },
  { label: 'Introduction to HTML5', id: 'id5', checked: true },
  { label: 'Mastering CSS3', id: 'id6', checked: false },
  { label: 'Building Responsive Websites', id: 'id7', checked: true },
  { label: 'Web Accessibility Essentials', id: 'id8', checked: true },
  { label: 'Node.js Fundamentals', id: 'id9', checked: false },
  { label: 'RESTful APIs with Node.js', id: 'id10', checked: true },
  { label: 'Database Design and SQL Basics', id: 'id11', checked: true },
  { label: 'Introduction to NoSQL Databases', id: 'id12', checked: true },
  { label: 'Version Control with Git', id: 'id13', checked: false },
  { label: 'Agile Development Practices', id: 'id14', checked: true },
  { label: 'Building Single Page Applications', id: 'id15', checked: true },
  { label: 'Testing JavaScript Applications', id: 'id16', checked: true },
  { label: 'Deploying Web Applications', id: 'id17', checked: false },
  { label: 'Web Performance Optimization', id: 'id18', checked: true },
  {
    label: 'Security Best Practices for Web Developers',
    id: 'id19',
    checked: false,
  },
  { label: 'Introduction to WebSockets', id: 'id20', checked: true },
];

// Component
const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">To DO List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" sideOffset={8}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="h-[300px] w-full mt-4 rounded-md border p-4">
        {items.map((item) => (
          <Card className="p-4 my-2" key={item.id}>
            <div className="flex items-center space-x-2">
              <Checkbox id={item.id} checked={item.checked} />
              <label
                htmlFor={item.id}
                className="text-sm text-muted-foreground"
              >
                {item.label}
              </label>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
};

// Export
export default TodoList;
