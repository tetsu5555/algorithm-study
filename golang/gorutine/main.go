package main

func main() {
	// var wg sync.WaitGroup
	// sayHello := func() {
	// 	defer wg.Done()
	// 	fmt.Println("hello")
	// }
	// wg.Add(1)
	// go sayHello()
	// wg.Wait()

	// var wg sync.WaitGroup
	// salutation := "hello"
	// wg.Add(1)
	// go func() {
	// 	defer wg.Done()
	// 	salutation = "Welcome"
	// }()
	// wg.Wait()
	// fmt.Println(salutation)

	// var wg sync.WaitGroup
	// for _, salutation := range []string{"hello", "greetings", "good day"} {
	// 	wg.Add(1)
	// 	go func() {
	// 		defer wg.Done()
	// 		fmt.Println(salutation)
	// 	}()
	// }
	// wg.Wait()

	// var wg sync.WaitGroup
	// for _, salutation := range []string{"hello", "greetings", "good day"} {
	// 	wg.Add(1)
	// 	go func(salutation string) {
	// 		defer wg.Done()
	// 		fmt.Println(salutation)
	// 	}(salutation)
	// }
	// wg.Wait()

	// 3.1のコード
	// var wg sync.WaitGroup
	// wg.Add(1)
	// go func() {
	// 	defer wg.Done()
	// 	fmt.Println("1st gorutine sleeping....")
	// 	time.Sleep(1)
	// }()

	// wg.Add(1)
	// go func() {
	// 	defer wg.Done()
	// 	fmt.Println("2nd gorutine sleeping...")
	// 	time.Sleep(2)
	// }()

	// wg.Wait()
	// fmt.Println("All gorutine completed")

	// 3.1のコード（二つ目）
	// hello := func(wg *sync.WaitGroup, id int) {
	// 	defer wg.Done()
	// 	fmt.Printf("Hello from %v!\n", id)
	// }

	// const numGreeters = 5
	// var wg sync.WaitGroup
	// wg.Add(numGreeters)
	// for i := 0; i < numGreeters; i++ {
	// 	go hello(&wg, i+1)
	// }
	// wg.Wait()

	// 3.2のコード
}
