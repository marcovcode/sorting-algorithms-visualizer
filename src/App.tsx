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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "./components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { sortingAlgorithms } from "./lib/sortingAlgorithms";
import { toCamelCase } from "./lib/functionNames";

const sortingAlgorithmOptions = [
    "Naive sort",
    "Bubble sort",
    "Selection sort",
    "Insertion sort",
    "Shell sort",
];

const formSchema = z.object({
    arr: z.string().min(1, "This field is required"),
    sortingAlgorithm: z.string().min(1, "This field is required"),
});

const App = () => {
    const [arr, setArr] = useState<number[]>([]);
    const [highlights, setHighlights] = useState<Highlights>();
    const [steps, setSteps] = useState<number>(1);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            arr: "",
            sortingAlgorithm: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const parsedArr = values.arr.split(",").map((n) => +n);
        const sortingAlgorithmFunctionName = toCamelCase(
            values.sortingAlgorithm,
        ) as keyof SortingAlgorithmsType;

        const { arr, highlights } = sortingAlgorithms[
            sortingAlgorithmFunctionName
        ](parsedArr, steps);
        setArr(arr);
        setHighlights(highlights);
        setSteps((s) => s + 1);
    };

    const onReset = () => {
        const arr = form.getValues("arr");
        setArr(arr ? arr.split(",").map((n) => +n) : []);
        setHighlights({
            indexes: [],
            swapped: false,
        });
        setSteps(1);
    };

    useSetTheme();

    return (
        <div className="flex h-dvh flex-col items-center p-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-4 md:w-auto md:flex-row"
                >
                    <FormField
                        control={form.control}
                        name="arr"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder='Numbers (separated by a ",")'
                                        className="w-full md:w-96"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="sortingAlgorithm"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="w-full md:w-48">
                                            <SelectValue placeholder="Sorting algorithm" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectGroup>
                                                {sortingAlgorithmOptions.map(
                                                    (
                                                        sortingAlgorithmOption,
                                                    ) => (
                                                        <SelectItem
                                                            value={
                                                                sortingAlgorithmOption
                                                            }
                                                            key={
                                                                sortingAlgorithmOption
                                                            }
                                                        >
                                                            {
                                                                sortingAlgorithmOption
                                                            }
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full md:w-auto">
                        Next
                    </Button>
                    <Button
                        type="reset"
                        className="w-full md:w-auto"
                        onClick={onReset}
                    >
                        Reset
                    </Button>
                </form>
            </Form>

            <div className="flex grow flex-col justify-center">
                <p className="space-x-4">
                    {arr.map((item, index) => (
                        <span
                            key={index}
                            className={`
                            ${highlights?.indexes?.includes(index) && highlights?.swapped && "bg-primary text-primary-foreground"} ${highlights?.indexes?.includes(index) && !highlights?.swapped && "bg-secondary text-secondary-foreground"} rounded-lg p-2 text-2xl font-bold md:text-4xl`}
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default App;
