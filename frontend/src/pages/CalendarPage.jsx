import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { startOfMonth, subMonths, addMonths, getDaysInMonth } from "date-fns";

const CalendarPage = () => {
  const [now, setNow] = useState(() => {
    return new Date();
  });

  const decrementMonth = () => {
    setNow((prev) => subMonths(prev, 1));
  };
  const incrementMonth = () => {
    setNow((prev) => addMonths(prev, 1));
  };

  const getBlankDays = () => {
    const monthStart = startOfMonth(now);
    const blankDays = monthStart.getDay(); // 0 (Sun) to 6 (Sat)
    return blankDays;
  };

  return (
    <div className="antialiased sans-serif h-screen text-base-100">
      <div className="container mx-auto px-4 py-2">
        <div className="bg-base-300 rounded-lg shadow overflow-hidden">
          {/* top row: month name, buttons */}
          <div className="flex items-center justify-between py-2 px-6">
            <div>
              <span className="text-lg font-bold text-base-content/80">
                {now.toLocaleString("default", { month: "long" })}
              </span>
              <span className="ml-1 text-lg text-base-content/70 font-normal">
                {now.getFullYear()}
              </span>
            </div>
            <div className="border rounded-lg px-1">
              <button
                className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                onClick={decrementMonth}
              >
                <ChevronLeft className="h-6 w-6 text-base-content/70" />
              </button>
              <div className="border-r inline-flex h-6"></div>
              <button
                className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                onClick={incrementMonth}
              >
                <ChevronRight className="h-6 w-6 text-base-content/70" />
              </button>
            </div>
          </div>

          {/* calendar grid */}
          <div className="-mx-1 -mb-1">
            {/* names of days of week */}
            <div className="flex flex-wrap" style={{ marginBottom: "-35px" }}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="w-1/7 px-2 py-2">
                  <div className="text-xs font-medium text-base-content/80 text-center">
                    {day}
                  </div>
                </div>
              ))}
            </div>
            {/* calendar days */}
            <div className="flex flex-wrap border-t border-l text-base-content/30 border-base-content/10">
              {/* blank days */}
              {Array.from({ length: getBlankDays() }).map((_, i) => (
                <div
                  key={i}
                  style={{ width: "14.28%", height: "120px" }}
                  className="text-center border-r border-b border-base-content/10 px-4 pt-2"
                ></div>
              ))}
              {/* numbered days */}
              {Array.from({ length: getDaysInMonth(now) }, (_, i) => i + 1).map(
                (day) => (
                  <div
                    key={day}
                    style={{ width: "14.28%", height: "120px" }}
                    className="border-r border-b border-base-content/10 px-4 pt-2 relative"
                  >
                    <div className="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 text-base-content/70 hover:bg-base-content/10 absolute top-1 right-1">
                      {day}
                    </div>
                    <div
                      style={{ height: "80px" }}
                      className="overflow-y-auto mt-5 text-xs text-left text-base-content/70"
                    >
                      {/* example events */}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
