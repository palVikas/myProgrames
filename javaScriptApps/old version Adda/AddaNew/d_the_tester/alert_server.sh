function new_commit(){
	while $loop_condition
	do 
		git ls-remote https://github.com/anantasur/ADDA.git HEAD > helpers/remoteHead 
		cut helpers/remoteHead -f1 > helpers/remote
		cd ../ADDA/
		git rev-parse HEAD > ../d_the_tester/helpers/localHead
		cd ../d_the_tester/
		node check.js > helpers/condition
		condition=($(<helpers/condition))
		$condition &&  echo -e "\a" ||  loop_condition=false
	done
}
function test(){
	cd /d/ADDA/
	git pull
	npm install
	npm run db_operations
	test_loop_condition=true
	while $test_loop_condition
	do
		npm run test 2> ../d_the_tester/helpers/error
		cd ../d_the_tester
		node error_check.js > helpers/error_check
		error=($(<helpers/error_check))
		cd ../ADDA/
		$error && echo 'this commit breaked the tests' && git log -1
		$error && echo -e "\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a\a" || test_loop_condition=false
	done
}
while true
do
	loop_condition=true
	new_commit
	test
	cd ../d_the_tester
done