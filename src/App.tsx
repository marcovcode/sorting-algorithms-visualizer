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
import { toUpperCamelCase } from "./lib/functionNames";

const sortingAlgorithmOptions = [
    "Naive sort",
    "Bubble sort",
    "Selection sort",
    "Insertion sort",
];

const formSchema = z.object({
    array: z.string().min(1, "This field is required"),
    sortingAlgorithm: z.string().min(1, "This field is required"),
});

const App = () => {
    const [arr, setArr] = useState<number[]>([]);
    const [swappedIndexes, setSwappedIndexes] = useState<number[] | null>(null);
    const [previousArray, setPreviousArray] = useState<string>("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            array: "",
            sortingAlgorithm: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const newArray = values.array;
        const sortingAlgorithmFunctionName = ("oneStep" +
            toUpperCamelCase(
                values.sortingAlgorithm,
            )) as keyof SortingAlgorithmsType;
        const parsedArr = newArray.split(",").map((n) => +n);

        if (previousArray === newArray) {
            const { next, swappedIndexes } =
                sortingAlgorithms[sortingAlgorithmFunctionName](arr);
            setArr(next);
            setSwappedIndexes(swappedIndexes);
        } else {
            const { next, swappedIndexes } =
                sortingAlgorithms[sortingAlgorithmFunctionName](parsedArr);
            setArr(next);
            setSwappedIndexes(swappedIndexes);
            setPreviousArray(newArray);
        }
    };

    const onReset = () => {
        const arrayValue = form.getValues("array");
        setArr(arrayValue.split(",").map((n) => +n));
        setSwappedIndexes([]);
    };

    useSetTheme();

    return (
        <div className="flex h-dvh flex-col items-center p-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex gap-4"
                >
                    <FormField
                        control={form.control}
                        name="array"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder='Array (separated by a ",")'
                                        className="w-96"
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
                                        <SelectTrigger className="w-48">
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

                    <Button type="submit">Next</Button>
                    <Button type="reset" onClick={onReset}>
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
                            ${swappedIndexes?.includes(index) && "bg-primary text-primary-foreground"} rounded-lg p-2 text-4xl font-bold`}
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
