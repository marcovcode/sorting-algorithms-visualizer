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

const sortingAlgorithmOptions = ["Bubble sort", "Quick sort"];

const formSchema = z.object({
    array: z.string().min(1, "This field is required"),
    sortingAlgorithm: z.string().min(1, "This field is required"),
});

const App = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            array: "",
            sortingAlgorithm: "",
        },
    });

    useSetTheme();

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

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

                    <Button>Sort!</Button>
                </form>
            </Form>
        </div>
    );
};

export default App;
