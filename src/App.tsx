import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useSetTheme } from "./lib/useSetTheme";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./components/ui/select";

const sortingAlgorithmOptions = ["Bubble sort", "Quick sort"];

const App = () => {
    useSetTheme();

    return (
        <div className="flex flex-col items-center p-4">
            <form className="flex gap-4">
                <Input
                    placeholder='Numbers array (separated by a ",")'
                    className="w-96"
                />

                <Select>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="Sorting algorithm" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            {sortingAlgorithmOptions.map(
                                (sortingAlgorithmOption) => (
                                    <SelectItem value={sortingAlgorithmOption}>
                                        {sortingAlgorithmOption}
                                    </SelectItem>
                                ),
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Button>Sort!</Button>
            </form>
        </div>
    );
};

export default App;
